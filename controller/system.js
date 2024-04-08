// 프로그램의 기능을 담당 
'use strict';
import { consoleBar, timeLog, resSend } from "../config/common.js";

const ping = (req, res) => {
    const result = true;
    res.send({result});
    consoleBar();
    timeLog('Get ping called');
};

export { ping };