const seedlingForm = [
  {field: 'name', label: '产品名'},
  {field: 'poolId', label: '池编'},
  {field: 'salinity', label: '盐度'},
  {field: 'temperature', label: '水温'},
  {field: 'ph', label: 'PH'},
  {field: 'dissolvedOxygen', label: '溶解氧'},
  {field: 'waterDepth', label: '水深'},
  {field: 'weight', label: '重量'},
];

const breedingForm = [
  {field: 'poolId', label: '池编'},
  {field: 'stage', label: '阶段'},
  {field: 'starDate', label: '开始日期'},
  {field: 'endDate', label: '结束日期'},
  {field: 'brand', label: '饲料品牌'},
  {field: 'initialWeight', label: '初重'},
  {field: 'finalWeight', label: '末重'},
  {field: 'drugName', label: '药名'},
  {field: 'dosage', label: '用量'},
];

const packForm = [
  {field: 'poolId', label: '池编'},
  {field: 'date', label: '捕捞日期'},
  {field: 'batch', label: '批次'},
  {field: 'origin', label: '产地'},
  {field: 'shelfLife', label: '保质期'},
  {field: 'weight', label: '重量'},
];

const deliveryForm = [
  {field: 'date', label: '出发日期'},
  {field: 'company', label: '物流公司'},
  {field: 'destination', label: '目的地'},
];

const sellForm = [
  {field: 'date', label: '到达日期'},
  {field: 'storeName', label: '门店'},
];

export default position => {
  switch (position) {
    case '种苗员':
      return seedlingForm;
    case '养殖员':
      return breedingForm;
    case '装箱员':
      return packForm;
    case '快递员':
      return deliveryForm;
    case '销售员':
      return sellForm;
    default:
      return {};
  }
};
