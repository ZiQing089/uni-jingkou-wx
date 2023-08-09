const getters = {
	token: state => state.user.token,
	mobile: state => state.user.mobile,
	user: state => state.user.user,
	idCard: state => state.user.idCard,
	weChartName: state => state.user.weChartName,
	avatar: state => state.user.avatar
}
export default getters
