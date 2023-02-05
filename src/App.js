import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";

//user info is the child of CurrentUser loader
function App() {
  return (
    <CurrentUserLoader>
      <UserInfo />
    </CurrentUserLoader>
  );
}

export default App;
