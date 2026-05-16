const VIEWS = {
  HOME: 'home',
  LOGIN: 'login',
  SIGNUP: 'signup',
  TASKS: 'tasks'
}

const getTodayDate = () => {
  return new Date().toISOString().split('T')[0]
}

const isUrgent = (d1, d2) => {

  const diffMs = d2 - d1
  const diffHours = diffMs / (1000 * 60 * 60)



  if( diffHours<0 | diffHours <24){
    return true
  }
  else{
    return false;
  }

}


export default { VIEWS, getTodayDate , isUrgent}