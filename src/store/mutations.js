export default {
  // 这里函数名字必须与actions调用的名字一样
  changeCity(state, city) {
    state.city = city;
    try {
      localStorage.city = city;
    } catch (e) {

    }
  },
};
