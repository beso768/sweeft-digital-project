export default function useHistoryList(userHistory, setUserHistory, userResponse) {
  let exist = userHistory.find(u => u.id === userResponse.id);
  if (!exist) {
    setUserHistory(curr => [...curr, userResponse]);
  }
}
