const express = require('express');
const router = express.Router();
const { createDynamoDbClient, executeScan } = require('../lib/dynamodb');

router.get('/scan', async function (req, res, next) {
    const scan = await executeScan(createDynamoDbClient(), {
        "TableName": "Forum",
        "ConsistentRead": false
    });
    res.json(scan);
});

module.exports = router;