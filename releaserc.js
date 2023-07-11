module.exports = {
  branches: ['master'],
  plugins: 
            [
              '@semantic-release/commit-analyzer',
              '@semantic-release/release-notes-generator',
              ['@semantic-release/changelog', { changelogTitle: '# CHANGELOG', "changelogFile": "${{ steps.changelog_path.outputs.path }}" }],
              '@semantic-release/github',
              ['@semantic-release/git', { "assets": ["${{ steps.changelog_path.outputs.path }}"] }]
            ],
  tagFormat: '${version}',
  preset: 'angular',
  // Add any additional configuration options as needed
};
