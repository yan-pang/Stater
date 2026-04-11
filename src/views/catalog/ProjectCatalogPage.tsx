import { useMemo, useState } from 'react'
import { Form, Input, Select, Space, Tag, Typography, message } from 'antd'
import DialogWrapper from '../../components/common/DialogWrapper'
import TablePageLayout from '../../components/layouts/TablePageLayout'
import { projectCatalogSeed, projectStatusOptions, type ProjectRecord, type ProjectStatus } from '../../services/projectCatalogMock'
import type { ActionButton, SearchItem, TableColumn } from '../../types'
import '../../styles/CatalogPage.scss'

interface ProjectFormValues {
  domain: string
  name: string
  owner: string
  status: ProjectStatus
}

interface SearchFilters {
  keyword?: string
  owner?: string
  status?: ProjectStatus
}

const PAGE_SIZE = 10

const searchItems: SearchItem[] = [
  { label: 'Keyword', prop: 'keyword', type: 'input', placeholder: 'Project name or domain' },
  { label: 'Status', prop: 'status', type: 'select', options: projectStatusOptions },
  { label: 'Owner', prop: 'owner', type: 'input', placeholder: 'Owner name' },
]

const statusColors: Record<ProjectStatus, string> = {
  Discovery: 'default',
  'In Build': 'processing',
  'Ready for Handoff': 'success',
}

function ProjectCatalogPage() {
  const [records, setRecords] = useState<ProjectRecord[]>(projectCatalogSeed)
  const [filters, setFilters] = useState<SearchFilters>({})
  const [page, setPage] = useState(1)
  const [pageSize, setPageSize] = useState(PAGE_SIZE)
  const [dialogOpen, setDialogOpen] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [form] = Form.useForm<ProjectFormValues>()

  const filteredRecords = useMemo(() => {
    return records.filter((record) => {
      const keyword = filters.keyword?.trim().toLowerCase()
      const owner = filters.owner?.trim().toLowerCase()
      const matchesKeyword =
        !keyword ||
        record.name.toLowerCase().includes(keyword) ||
        record.domain.toLowerCase().includes(keyword)
      const matchesOwner = !owner || record.owner.toLowerCase().includes(owner)
      const matchesStatus = !filters.status || record.status === filters.status

      return matchesKeyword && matchesOwner && matchesStatus
    })
  }, [filters, records])

  const pageData = useMemo(() => {
    const start = (page - 1) * pageSize
    return filteredRecords.slice(start, start + pageSize)
  }, [filteredRecords, page, pageSize])

  const actionButtons: ActionButton<ProjectRecord>[] = [
    { name: 'create', label: 'New Project', type: 'primary' },
  ]

  const tableActions: ActionButton<ProjectRecord>[] = [
    { name: 'edit', label: 'Edit', type: 'link' },
    { name: 'duplicate', label: 'Duplicate', type: 'link' },
  ]

  const columns: TableColumn<ProjectRecord>[] = [
    {
      prop: 'name',
      label: 'Project',
      minWidth: 180,
      formatter: (record) => (
        <div className="catalog-project-cell">
          <strong>{record.name}</strong>
          <span>{record.domain}</span>
        </div>
      ),
    },
    { prop: 'owner', label: 'Owner', width: 120 },
    {
      prop: 'status',
      label: 'Status',
      width: 180,
      formatter: (record) => <Tag color={statusColors[record.status]}>{record.status}</Tag>,
    },
    { prop: 'modules', label: 'Modules', width: 100 },
    { prop: 'updatedAt', label: 'Updated', width: 140 },
  ]

  const openCreateDialog = () => {
    setEditingId(null)
    form.setFieldsValue({
      domain: '',
      name: '',
      owner: '',
      status: 'Discovery',
    })
    setDialogOpen(true)
  }

  const openEditDialog = (record: ProjectRecord) => {
    setEditingId(record.id)
    form.setFieldsValue({
      domain: record.domain,
      name: record.name,
      owner: record.owner,
      status: record.status,
    })
    setDialogOpen(true)
  }

  const handleDuplicate = (record: ProjectRecord) => {
    const duplicatedRecord: ProjectRecord = {
      ...record,
      id: `starter-${Date.now()}`,
      name: `${record.name} Copy`,
      updatedAt: new Date().toISOString().slice(0, 10),
    }

    setRecords((current) => [duplicatedRecord, ...current])
    message.success('Project duplicated in local mock data')
  }

  const handleSave = async () => {
    const values = await form.validateFields()

    if (editingId) {
      setRecords((current) =>
        current.map((record) =>
          record.id === editingId
            ? {
                ...record,
                ...values,
                updatedAt: new Date().toISOString().slice(0, 10),
              }
            : record,
        ),
      )
      message.success('Project updated')
    } else {
      const newRecord: ProjectRecord = {
        id: `starter-${Date.now()}`,
        ...values,
        modules: 1,
        updatedAt: new Date().toISOString().slice(0, 10),
      }
      setRecords((current) => [newRecord, ...current])
      message.success('Project created')
    }

    setDialogOpen(false)
  }

  return (
    <>
      <TablePageLayout<ProjectRecord>
        actionButtons={actionButtons}
        current={page}
        description={
          <Typography.Paragraph>
            This generic sample demonstrates the starter&apos;s default list-page shape: search, table,
            pagination, and a modal create or edit flow.
          </Typography.Paragraph>
        }
        initialFormData={filters}
        pageSize={pageSize}
        searchItems={searchItems}
        tableActions={tableActions}
        tableColumns={columns}
        tableData={pageData}
        title="Project Catalog"
        total={filteredRecords.length}
        onAction={(action) => {
          if (action === 'create') {
            openCreateDialog()
          }
        }}
        onPagination={(nextPage, nextPageSize) => {
          setPage(nextPage)
          setPageSize(nextPageSize)
        }}
        onReset={() => {
          setFilters({})
          setPage(1)
        }}
        onSearch={(nextFilters) => {
          setFilters(nextFilters as SearchFilters)
          setPage(1)
        }}
        onTableAction={(action, row) => {
          if (action === 'edit') {
            openEditDialog(row)
          }

          if (action === 'duplicate') {
            handleDuplicate(row)
          }
        }}
      />

      <DialogWrapper
        confirmText={editingId ? 'Save changes' : 'Create project'}
        title={editingId ? 'Edit Project' : 'New Project'}
        visible={dialogOpen}
        onConfirm={() => void handleSave()}
        onVisibleChange={setDialogOpen}
      >
        <Form form={form} layout="vertical">
          <Form.Item label="Project name" name="name" rules={[{ required: true, message: 'Project name is required' }]}>
            <Input placeholder="Enter project name" />
          </Form.Item>
          <Form.Item label="Domain" name="domain" rules={[{ required: true, message: 'Domain is required' }]}>
            <Input placeholder="Enter project domain" />
          </Form.Item>
          <Space className="catalog-form-row" size={16}>
            <Form.Item label="Owner" name="owner" rules={[{ required: true, message: 'Owner is required' }]}>
              <Input placeholder="Owner name" />
            </Form.Item>
            <Form.Item label="Status" name="status" rules={[{ required: true, message: 'Status is required' }]}>
              <Select options={projectStatusOptions} />
            </Form.Item>
          </Space>
        </Form>
      </DialogWrapper>
    </>
  )
}

export default ProjectCatalogPage
