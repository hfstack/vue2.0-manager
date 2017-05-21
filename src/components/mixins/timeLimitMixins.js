/**
 * 兑换时间限制等的mixins
 */
export default {
  computed: {
    /**
     * 时选择
     */
    hours: function() {
      var result = [{
        id: 'all',
        label: '时'
      }];
      for (let i = 0; i < 24; i++) {
        result.push({
          id: i + '',
          label: i + ''
        });
      }
      return result;
    },
    /**
     * 分选择
     */
    minutes: function() {
      var result = [{
        id: '',
        label: '分'
      }];
      var minutes = [0, 10, 20, 30, 40, 50, 59];
      for (let i = 0; i < minutes.length; i++) {
        result.push({
          id: minutes[i] + '',
          label: minutes[i] + ''
        });
      }
      return result;
    }
  }
};
