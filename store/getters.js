const getters = {
	token: state => state.user.token,
	mobile: state => state.user.mobile,
	user: state => state.user.user,
	lat: state => state.user.lat,
	lng: state => state.user.lng,
	rule: state => state.user.rule,
	creatorId: state => state.user.creatorId,
	idCard: state => state.user.idCard,
	weChartName: state => state.user.weChartName,
	avatar: state => state.user.avatar
}
export default getters
