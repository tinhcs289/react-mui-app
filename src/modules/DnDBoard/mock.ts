import newGuid from '@/helpers/stringHelpers/newGuid';
import type { DndBoardColumnData } from './_types';

const col1 = [
  {
    id: '2beaeeaf-f327-455d-bcc9-a71ed659d8e3',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '4a686112-bee4-42b9-8873-187ad8d67b96',
    name: 'Báo giá khách FIT',
    bookingCode: '001493499811',
    totalPrice: 17850000,
    userProcess: 1004,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 3,
    totalAdult: 3,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-03-11T00:00:00',
    active: true,
    createdDate: '2022-02-08T07:35:40.38',
    createdBy: 1004,
    modifiedBy: 1004,
    modifiedDate: '2022-02-08T07:35:41.187',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '3488ee07-8dab-4ed5-927d-2aa920128f86',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '4a686112-bee4-42b9-8873-187ad8d67b96',
    name: 'Báo giá khách FIT',
    bookingCode: '001829403944',
    totalPrice: 17850000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 3,
    totalAdult: 3,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-03-11T00:00:00',
    active: true,
    createdDate: '2022-01-24T03:47:19.183',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-24T03:47:19.887',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '1594f0eb-05f1-4549-8a55-d900c127facd',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '4a686112-bee4-42b9-8873-187ad8d67b96',
    name: 'Báo giá khách FIT',
    bookingCode: '000966080149',
    totalPrice: 17850000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 1,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 3,
    totalAdult: 3,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-03-11T00:00:00',
    active: true,
    createdDate: '2022-01-19T04:54:15.107',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-19T05:01:34.467',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '2c7f58e8-802e-48ff-9f57-4b3425734c30',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '5a084737-deb5-4338-bcb7-56a3e48a3a60',
    name: 'Báo giá mẫu 7',
    bookingCode: '000105936444',
    totalPrice: 247550000,
    userProcess: 1255,
    processUserName: null,
    priceProfit: 0,
    status: 1,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-05-12T00:00:00',
    active: true,
    createdDate: '2022-01-11T02:56:28.37',
    createdBy: 1255,
    modifiedBy: 1255,
    modifiedDate: '2022-01-11T02:59:28.343',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '11a5ed43-0555-40d6-9f99-bb35f0e4405a',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '1da4284b-088f-4e59-971c-1d0a61b8da59',
    name: 'Báo giá mẫu 5 ',
    bookingCode: '000801287013',
    totalPrice: 176950000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 1,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T07:21:52.737',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T07:25:45.67',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '8102e5b9-1ca7-44db-aba8-9d458be67c9e',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '1829152e-e65b-45fe-9ff2-8ce9978d7ecc',
    name: 'Báo giá mẫu 6',
    bookingCode: '000870145786',
    totalPrice: 342920000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 1,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 54,
    totalAdult: 54,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T07:07:48.58',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T07:15:51.95',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: 'd47b8a47-ee6b-45bb-82c5-65f5c30954bd',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '1da4284b-088f-4e59-971c-1d0a61b8da59',
    name: 'Báo giá mẫu 5 ',
    bookingCode: '000004358591',
    totalPrice: 176950000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 1,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T05:04:03.137',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T07:16:52.08',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '038ae8d0-615a-4193-baa8-cad95fc99411',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '7c629ba9-f873-4f60-b0bc-cffa2873d5be',
    name: 'Báo giá mẫu 4',
    bookingCode: '000301859248',
    totalPrice: 38150000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T04:47:42.51',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T04:47:44.057',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '5edb4a1b-c87f-4443-b0ba-1639dc60150b',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '411da3f6-d109-44bd-8287-f78e0d97fbd2',
    name: 'Báo giá mẫu 3',
    bookingCode: '001848513421',
    totalPrice: 32120000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 9,
    totalAdult: 9,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T04:41:50.897',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T04:41:51.727',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: 'a9aac63b-640b-4acf-af24-fa97e7260a3a',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '699ed51a-1d45-4ace-ad71-236b1ae5acca',
    name: 'Báo giá mẫu 2',
    bookingCode: '001605486449',
    totalPrice: 31300000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 9,
    totalAdult: 9,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T04:36:39.67',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T04:36:40.69',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
];
const col2 = [
  {
    id: 'd4132560-2e78-4623-9458-0a91a24e5ce5',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: 'cd29fac5-d18d-451f-aca2-f1163af9e5d8',
    name: 'Báo giá mẫu 1 ',
    bookingCode: '001561474242',
    totalPrice: 166500000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T03:47:49.323',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T03:47:50.82',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: 'b71225fc-545f-4a22-851f-ba8818546eeb',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '572d5a72-40f4-4a36-b047-f5644273cd1f',
    name: 'Báo giá test 1',
    bookingCode: '001924764403',
    totalPrice: 5600000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 1,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 2,
    totalAdult: 2,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T03:24:50.683',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T03:30:22.947',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '71da22ba-e1ce-42e3-8d19-ff06d8cc5fd8',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '0e384e81-493a-4dbf-9fae-d0abd7a61161',
    name: 'Báo giá test ',
    bookingCode: '000345478809',
    totalPrice: 2800000,
    userProcess: 1159,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 2,
    totalAdult: 2,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T02:55:43.597',
    createdBy: 1159,
    modifiedBy: 1159,
    modifiedDate: '2022-01-10T02:55:43.94',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '072725a1-3406-4278-bc2c-c3c6555b76c6',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '0e384e81-493a-4dbf-9fae-d0abd7a61161',
    name: 'Báo giá test ',
    bookingCode: '000502411129',
    totalPrice: 2800000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 2,
    totalAdult: 2,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T02:53:38.15',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T02:53:38.533',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '6cf31b8a-bd0b-48e5-b9ac-4b95c640b6e6',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '0e384e81-493a-4dbf-9fae-d0abd7a61161',
    name: 'Báo giá test ',
    bookingCode: '000476983576',
    totalPrice: 2800000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 2,
    totalAdult: 2,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T02:51:28.347',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T02:51:28.737',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '1edd132c-5567-4a0e-8a99-daab9bea327e',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '1a177b33-de19-4953-99cf-b2cc28d7cff8',
    name: 'Bái giá mấu 1 - 1 đoàn ',
    bookingCode: '000962200080',
    totalPrice: 95100000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T02:46:44.69',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T02:46:46.013',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '293f0009-7ac6-4821-a211-8b9607a44ee7',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '1a177b33-de19-4953-99cf-b2cc28d7cff8',
    name: 'Bái giá mấu 1 - 1 đoàn ',
    bookingCode: '000627936250',
    totalPrice: 95100000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T02:45:59.21',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T02:46:00.357',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '8da9c9d0-23ae-4170-874b-6a5a2cd3129e',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '1a177b33-de19-4953-99cf-b2cc28d7cff8',
    name: 'Bái giá mấu 1 - 1 đoàn ',
    bookingCode: '001196319520',
    totalPrice: 95100000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T02:45:27.95',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T02:45:29.183',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '91dfab44-d018-477e-82c1-e798822a4a6d',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '1a177b33-de19-4953-99cf-b2cc28d7cff8',
    name: 'Bái giá mấu 1 - 1 đoàn ',
    bookingCode: '001639787060',
    totalPrice: 95100000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-10T02:44:47.733',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-10T02:44:49.707',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '0ee9c7d0-4f0f-419f-a13d-6335858832a4',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '0ccefd19-d2c6-4fa2-aff3-1bd65ca08325',
    name: 'Báo giá mẫu 1',
    bookingCode: '000990548016',
    totalPrice: 322200000,
    userProcess: 1159,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 54,
    totalAdult: 54,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-08T07:39:27.86',
    createdBy: 1159,
    modifiedBy: 1159,
    modifiedDate: '2022-01-08T07:39:30.237',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
];
const col3 = [
  {
    id: '65ed9ca8-afd6-4ca5-8db9-1a27123ccd13',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '0ccefd19-d2c6-4fa2-aff3-1bd65ca08325',
    name: 'Báo giá mẫu 1',
    bookingCode: '000957836821',
    totalPrice: 322200000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 54,
    totalAdult: 54,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-08T07:24:23.11',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-08T07:24:25.9',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '078040fa-edc5-4e72-a355-3939cf713ada',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '32afc97f-e8b6-4bfb-a175-5abd0dabc641',
    name: 'Báo giá 10',
    bookingCode: '001942244796',
    totalPrice: 136400000,
    userProcess: 1159,
    processUserName: null,
    priceProfit: 0,
    status: 1,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-08T04:48:33.32',
    createdBy: 1159,
    modifiedBy: 1159,
    modifiedDate: '2022-01-08T04:49:41.057',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '9f14bc52-187d-442d-9de9-135864d853e0',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: 'c1025121-1273-42c4-8638-f91608a8e0f6',
    name: 'Báo giá 8',
    bookingCode: '001823938532',
    totalPrice: 120880000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-08T02:57:40.953',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-08T02:57:42.427',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '834aeac8-7323-4f35-9ea5-7a803faeadc7',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: 'c1025121-1273-42c4-8638-f91608a8e0f6',
    name: 'Báo giá 8',
    bookingCode: '000542800941',
    totalPrice: 120880000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-07T07:40:24.05',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-07T07:40:25.88',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: 'f5deee39-e4bf-42ba-8cd5-6eb161bfc72e',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '2312ca2b-6ad6-406f-b02c-678350ed3482',
    name: 'Báo giá 7',
    bookingCode: '001931185296',
    totalPrice: 238760000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-07T07:28:09.087',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-07T07:29:23.12',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '4f76d5a2-31c3-4818-92d3-6c930fdb5c9e',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '37fc27cd-f955-48ee-bc39-c640876ba29e',
    name: 'Báo giá 6 ',
    bookingCode: '001632161079',
    totalPrice: 126200000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 1,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-07T05:03:12.1',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-07T05:06:02.66',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: 'a39cfb39-72b6-429c-b35c-a8e70ff72c9a',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '37fc27cd-f955-48ee-bc39-c640876ba29e',
    name: 'Báo giá 6 ',
    bookingCode: '001491732664',
    totalPrice: 126200000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-07T04:47:12.02',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-07T04:47:13.287',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: 'daf65b75-519e-45be-a37c-07a5bfd5eccb',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '37fc27cd-f955-48ee-bc39-c640876ba29e',
    name: 'Báo giá 6 ',
    bookingCode: '000483953645',
    totalPrice: 126200000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-07T04:41:53.313',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-07T04:41:54.793',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: '6289be62-1106-4201-97f0-3e4e9dcef6ce',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '785baac9-ee83-413f-816c-9932df2de19b',
    name: 'Báo giá 3',
    bookingCode: '001098233651',
    totalPrice: 210980000,
    userProcess: 1159,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 17,
    totalAdult: 14,
    totalChild: 2,
    totalInf: 1,
    version: 1,
    startDate: '2022-04-14T00:00:00',
    active: true,
    createdDate: '2022-01-07T03:10:06.337',
    createdBy: 1159,
    modifiedBy: 1159,
    modifiedDate: '2022-01-07T03:13:05.51',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
  {
    id: 'c2816a14-14f8-4e17-b704-7632a9d0542c',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '9eeda29c-3289-403b-aa77-fa3581c3a8ee',
    name: 'Báo giá 1 ',
    bookingCode: '000017046442',
    totalPrice: 3800000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 3,
    totalAdult: 3,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-07T02:18:55.373',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-07T02:18:55.997',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
];
const col4 = [
  {
    id: '3ae9e267-dacd-4c02-b4c3-561cabd82c8f',
    workGroupId: '94ba8c79-6633-43ab-bb75-6afc449fa5b6',
    quotationId: '493bfa0e-7b9c-4a55-86f5-5f37e40a7ec7',
    name: 'Báo giá 2',
    bookingCode: '001635266707',
    totalPrice: 123200000,
    userProcess: 1444,
    processUserName: null,
    priceProfit: 0,
    status: 0,
    customerId: 'c89caa34-c4ba-43b6-b0c6-be2f86b27f49',
    customerName: 'Bóng đá Nam - Đoàn Việt Nam',
    customGroupId: '31f2314a-a804-4667-9581-44a70aabbaf1',
    customGroupName: 'Môn Bóng đá Nam',
    paymentMethod: 1,
    buyOrSell: 2,
    supplierId: '00000000-0000-0000-0000-000000000000',
    supplierName: null,
    totalPassenger: 27,
    totalAdult: 27,
    totalChild: 0,
    totalInf: 0,
    version: 1,
    startDate: '2022-04-01T00:00:00',
    active: true,
    createdDate: '2022-01-06T10:54:25.913',
    createdBy: 1444,
    modifiedBy: 1444,
    modifiedDate: '2022-01-06T10:54:27.41',
    deletedBy: null,
    deletedDate: null,
    isDeleted: false,
    bookingServices: null,
  },
];
export type MockItem = (typeof col4)[0];
const mockColumns: MockItem[][] = [
  col1 as unknown as MockItem[],
  col2 as unknown as MockItem[],
  col3 as unknown as MockItem[],
  col4 as unknown as MockItem[],
];
export const mockData: DndBoardColumnData<MockItem>[] = mockColumns.map((items) => ({
  _id: newGuid(),
  items: items.map((item) => ({
    _id: newGuid(),
    ...item,
  })),
}));
