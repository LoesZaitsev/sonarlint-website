var sonarLintSonarAnalyzerMappings = [
    { sonarLintVersion: '2.0.0', sonarAnalyzerVersion: '1.10.0' },
    { sonarLintVersion: '2.1.0', sonarAnalyzerVersion: '1.11.0' },
    { sonarLintVersion: '2.2.0', sonarAnalyzerVersion: '1.12.0' }
];
window.onload = function () {
    App.Controller = new Controllers.VisualStudioRulePageController('1.12.0');
};
//# sourceMappingURL=App.js.map