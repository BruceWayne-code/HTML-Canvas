patterns = [...defaultIgnores];
    // 2.read the local .aiignore file if the user created one
    const aiIgnorePath = path.join(this.gitRoot,'.aiignore');
    if(fs.existsSync(aiIgnorePath)){
      try{
        const fileContent = fs.readFileSync(aiIgnorePath,'utf-8');
        const customPatterns = fileContent.split('\n').map(line=>line.trim()).filter(line=>line.length>0&&!line.startsWith('#'));
        patterns = [...patterns,...customPatterns];
      }catch(error){
        console.error('Failed to read,.aiignore file:',error);
      }
    }
    return patterns.map(pattern =>`:!${pattern}`)