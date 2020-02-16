export const sortData = (data) => {

    // create hash of keys that we want as unique and values that we don't care about being unique
    const uniqueStore = {};
    Object.values(data).forEach((item) => {
        uniqueStore[[item.uuid, item.content]] = [item.sentAt, item.senderUuid];
    })

    // push unique hash items back into array
    const uniques = [];
    Object.keys(uniqueStore).forEach((key) => {
        let keyItems = key.split(",");
        let temp = {"sentAt": uniqueStore[key][0], "uuid": keyItems[0], "content": keyItems[1], "senderUuid": uniqueStore[key][1], "status": "unread"};
        uniques.push(temp);
    })

    // plug into sorting function(below)
    return uniques.sort(dateComparison)
}

function dateComparison(date1, date2) {
    let comparison = 0;
    date1 = date1.sentAt;
    date2 = date2.sentAt;

    if (date1 < date2) {
        comparison = -1;
    } else if (date1 > date2) {
        comparison = 1;
    }
    return comparison
}