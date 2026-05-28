exports.getIgnorePatterns=>(){
    let pattern =[];
    const defaultIgnore = vscode.workspace.getConfiguration('aiGitFlowAgent').defaultAiIgnore
    return patterns = [...defaultIgnore]
}