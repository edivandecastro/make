export const isAuthenticated = () => {
  localStorage.setItem('token', 'akajsdjiuabnajsdi78231hajd');

  console.log(localStorage.getItem('token'));

  return true;
}
