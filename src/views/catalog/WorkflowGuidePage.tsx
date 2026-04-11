import { Card, Col, List, Row, Tag, Typography } from 'antd'
import '../../styles/WorkflowGuidePage.scss'

const coreDocs = [
  'docs/workflow.md',
  'docs/starter-architecture.md',
  'docs/ai-collaboration.md',
  'docs/delivery-checklist.md',
]

const deliveryOutputs = [
  'research/<feature>.md',
  'specs/<feature>.md',
  'delivery/<feature>_prd.md',
  'delivery/<feature>_test-strategy.md',
]

function WorkflowGuidePage() {
  return (
    <section className="workflow-guide">
      <header className="workflow-guide__header">
        <Typography.Title level={2}>Workflow Guide</Typography.Title>
        <Typography.Paragraph>
          The starter keeps one compact workflow definition. Specs live in project folders, reusable rules live in
          `docs/` and `templates/`, and specialist agents stay optional.
        </Typography.Paragraph>
      </header>

      <Row gutter={[16, 16]}>
        <Col span={12}>
          <Card title="Core documents">
            <List
              dataSource={coreDocs}
              renderItem={(item) => (
                <List.Item>
                  <Tag color="blue">Docs</Tag>
                  <code>{item}</code>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Typical outputs">
            <List
              dataSource={deliveryOutputs}
              renderItem={(item) => (
                <List.Item>
                  <Tag color="geekblue">Output</Tag>
                  <code>{item}</code>
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={24}>
          <Card title="Recommended collaboration mode">
            <List
              dataSource={[
                'One main assistant owns context, sequencing, and final output.',
                'Use a design-agent only after the goal and scope are already clear.',
                'Use a build-agent for bounded UI implementation that can run in parallel.',
                'Use a review-agent for link checks, handoff quality, and coverage gaps.',
              ]}
              renderItem={(item) => <List.Item>{item}</List.Item>}
            />
          </Card>
        </Col>
      </Row>
    </section>
  )
}

export default WorkflowGuidePage
