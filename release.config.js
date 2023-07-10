module.exports = {
    branch: 'master',
    monorepo: {
      analyzeCommits: [
        '@semantic-release/commit-analyzer'
      ],
      generateNotes: [
        '@semantic-release/release-notes-generator'
      ]
    },
    verifyConditions: [],
    verifyRelease: [],
    prepare: [],
    publish: [],
    success: [
      '@semantic-release/github'
    ],
    fail: [
      '@semantic-release/github'
    ],
    generateNotes: [
      {
        path: '@semantic-release/changelog',
        changelogTitle: '# CHANGELOG',
        changelogFile: 'CHANGELOG.md',
        changelogCompareUrlFormat: '${repoUrl}/compare/${previousTag}...${currentTag}',
      }
    ],
    analyzeCommits: [
      '@semantic-release/commit-analyzer'
    ],
    generateVersion: [],
    verifyConditions: [],
    getLastRelease: [],
    publish: [],
    success: [],
    fail: []
  };
  
  