export default [
  {
    url: "/api/list",
    method: "get",
    response: () => {
      return {
        code: 200,
        msg: "成功",
        data: {
          total: 2,
          current: 1,
          pageSize: 10,
          list: [
            {
              id: 1,
              name: "名字1",
            },{
              id: 2,
              name: "名字2",
            }
          ]
        }
      }
    }
  }
]