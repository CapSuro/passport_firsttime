const fs = require('fs')

let writeObj = []

fs.readFile('hanhchinh_tree.json', (err, data)=> {
    if(err) throw err;
    let hanhchinh = JSON.parse(data.toString())
    for(h in hanhchinh){
        let hanhchinh_name = hanhchinh[h]['name']
        let quanhuyen = hanhchinh[h]['quan-huyen']
        for(q in quanhuyen){
            let quanhuyen_name = quanhuyen[q]['name']
            writeObj.push([h,q,quanhuyen_name]);
        }
    }
    console.log(writeObj)
    fs.writeFile('./hanhchinh_quanhuyen.sql',JSON.stringify(writeObj), (err,data)=>{
        if(err) throw err;
        console.log("ghi thanh cong");
    });
});
