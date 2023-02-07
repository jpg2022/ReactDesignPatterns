import { CurrentUserLoader } from "./CurrentUserLoader";
import { UserInfo } from "./UserInfo";
import { UserLoader } from "./UserLoader";

//user info is the child of CurrentUser loader
function App() {
  return (
    <>
      <UserLoader userID="123">
        <UserInfo />
      </UserLoader>
      <UserLoader userID="234">
        <UserInfo />
      </UserLoader>
      <UserLoader userID="345">
        <UserInfo />
      </UserLoader>
    </>
  );
}

export default App;
