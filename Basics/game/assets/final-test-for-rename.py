hello = 'I am yogesh sharma'
print(hello)
a =23;
b = 12;
# calculator
print('a+b = ', a+b)
function hello ():
    print('Hello world')

hello();
async stageChanges(): Promise<boolean> {
    try {
      console.log("🔄 Staging changes (git add .)...");
      await this.git.add(".");
      console.log("✅ Changes staged");
      return true;
    } catch (error) {
      console.error("❌ Error staging changes:", error);
      return false;
    }
  }