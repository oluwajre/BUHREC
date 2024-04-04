export function roleForm(roleType) {
  
  if (roleType === 'researcher') {
    document.getElementById('s-right').style.alignItems = 'center';
    document.getElementById('review').style.display = 'none';
    document.getElementById('research').style.display = 'flex';
  }
  else if (roleType === 'reviewer') {
    document.getElementById('s-right').style.alignItems = 'flex-start';
    document.getElementById('research').style.display = 'none';
    document.getElementById('review').style.display = 'flex';
  }
}