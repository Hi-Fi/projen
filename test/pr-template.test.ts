import { synthSnapshot, TestProject } from '../src/util/synth';

const PULL_REQUEST_TEMPLATE_FILE = '.github/pull_request_template.md';

test('default', () => {
  // GIVEN
  const project = new TestProject();
  const github = project.github;

  // WHEN
  github?.addPullRequestTemplate();

  // THEN
  expect(synthSnapshot(project)[PULL_REQUEST_TEMPLATE_FILE]).toStrictEqual('Fixes #');
});

test('custom content', () => {
  // GIVEN
  const project = new TestProject();
  const github = project.github;

  // WHEN
  github?.addPullRequestTemplate(
    'hello',
    'world',
    '',
    'foobar',
  );

  // THEN
  expect(synthSnapshot(project)[PULL_REQUEST_TEMPLATE_FILE]).toStrictEqual([
    'hello',
    'world',
    '',
    'foobar',
  ].join('\n'));
});
