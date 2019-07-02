import React from 'react';
import { List, Item } from './style';

const TransactionList = () => {
	const data = [{
			"id": 35886,
			"lenderId": 8676,
			"borrowerId": 68115,
			"itemId": 3949,
			"fromDate": "2018-02-15 00:00:00+00",
			"toDate": "2018-02-16 00:00:00+00",
			"status": "ESCROW",
			"promocode": null,
			"creditUsed": 0,
			"price": 2025,
			"totalDiscount": 0,
			"currency": "GBP"
    },
    {
			"id": 35867,
			"lenderId": 43413,
			"borrowerId": 28126,
			"itemId": 56589,
			"fromDate": "2018-02-15 00:00:00+00",
			"toDate": "2018-02-16 00:00:00+00",
			"status": "FL_APPROVED",
			"promocode": null,
			"creditUsed": 0,
			"price": 4050,
			"totalDiscount": 0,
			"currency": "GBP"
    },
    {
			"id": 35889,
			"lenderId": 17569,
			"borrowerId": 34952,
			"itemId": 57452,
			"fromDate": "2018-02-15 00:00:00+00",
			"toDate": "2018-02-16 00:00:00+00",
			"status": "ESCROW",
			"promocode": null,
			"creditUsed": 0,
			"price": 2500,
			"totalDiscount": 0,
			"currency": "GBP"
		}];

	return (
		<List>
			{data.map((item, i) => (
				<Item key={i}>{item.id}</Item>
			))}
		</List>
	);
};

export default TransactionList;
