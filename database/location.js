exports.getIgnorePatterns=()=>{
    let pattern =[];
    const defaultIgnore = vscode.workspace.getConfiguration('aiGitFlowAgent').defaultAiIgnore
    const aiIgnores = Path2D.join(this.getIgnorePatterns,'.aiignore')
    return patterns = [...defaultIgnore]
}