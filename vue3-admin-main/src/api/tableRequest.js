import request from '../utlis/request'

// 获取表格数据
export const getTableData = () => {
  return request({
    url: '../../table.json',
    method: 'get',
  })
}
