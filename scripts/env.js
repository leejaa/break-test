const readlineSync = require('readline-sync');
const fs = require('fs').promises;;
const axios = require('axios');
const { pick, intersection } = require('lodash');
let PROJECT_ID = '';
const TEAM_ID = '';
const TOKEN = 'bMURkkLJP1V9avAq7OmwZX2R';
let PROJECT_NAME = '';

function execute() {
    const projectName = readlineSync.question('프로젝트이름을 입력해주세요. (ex. break)');
    
    if (projectName === 'break') {
        PROJECT_ID = 'prj_j3r9kPVWXgHqAT11wmz9qRcl2QLA';
        PROJECT_NAME = 'break';
    } else {
        console.log('프로젝트 이름을 잘못 입력했습니다.');
        return;
    }
    
    const actionType = process.argv[2];
    
    if (actionType === 'add') {
        addEnv();
    } else if (actionType === 'edit') {
        editEnv();
    } else if (actionType === 'get') {
        getEnv();
    } else if (actionType === 'delete') {
        deleteEnv();
    } else if (actionType === 'pull') {
        pullEnv();
    }
}

execute();

async function getEnvList() {
    const config = {
        method: 'get',
        // url: `https://api.vercel.com/v9/projects/${PROJECT_ID}/env?teamId=${TEAM_ID}`,
        url: `https://api.vercel.com/v9/projects/${PROJECT_ID}/env`,
        headers: { 
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
        },
    };

    try {
        const response = await axios(config);
        return response.data.envs;
    } catch (error) {
        console.log('에러가 발생했습니다.');
        console.log(error);
        return;
    }
}

async function addEnv() {
    const key = readlineSync.question('추가하고 싶은 환경변수 key 이름을 입력해주세요.');
    const value = readlineSync.question(`${key}의 value 값을 입력해주세요.`);
    let target = readlineSync.question('개발환경이면 develop, 프로덕션이면 production 이라고 입력해주세요.');
    if (target === 'develop') {
        target = ['preview', 'development'];
    } else if (target === 'production') {
        target = ['production'];
    } else {
        console.log('develop 또는 production 을 입력해주셔야 합니다.');
        return;
    }

    const data = JSON.stringify({
        "key": key,
        "target": target,
        "type": "plain",
        "value": value
    }, null, 2);

    const config = {
        method: 'post',
        // url: `https://api.vercel.com/v9/projects/${PROJECT_ID}/env?teamId=${TEAM_ID}`,
        url: `https://api.vercel.com/v9/projects/${PROJECT_ID}/env`,
        headers: { 
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
        },
        data : data
    };

    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log('에러가 발생했습니다.');
        console.log(error);
        return;
    }
}

async function editEnv() {
    const key = readlineSync.question('수정하고 싶은 환경변수 key 이름을 입력해주세요.');
    const value = readlineSync.question(`${key}의 value 값을 입력해주세요.`);
    let target = readlineSync.question('개발환경이면 develop, 프로덕션이면 production 이라고 입력해주세요.');
    if (target === 'develop') {
        target = ['preview', 'development'];
    } else if (target === 'production') {
        target = ['production'];
    } else {
        console.log('develop 또는 production 을 입력해주셔야 합니다.');
        return;
    }

    const data = JSON.stringify({
        "key": key,
        "target": target,
        "type": "plain",
        "value": value
    }, null, 2);

    const envs = await getEnvList();
    
    id = envs.find(item => item.key === key && intersection(item.target, target).length > 0).id;

    const config = {
        method: 'patch',
        // url: `https://api.vercel.com/v9/projects/${PROJECT_ID}/env/${id}?teamId=${TEAM_ID}`,
        url: `https://api.vercel.com/v9/projects/${PROJECT_ID}/env/${id}`,
        headers: { 
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
        },
        data : data
    };
    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log('에러가 발생했습니다.');
        console.log(error);
        return;
    }
}

async function getEnv() {
    try {
        let envs = await getEnvList();
        envs = envs.map(env => pick(env, ['id', 'key', 'value', 'target']))
        console.log(JSON.stringify(envs, null, 2));
    } catch (error) {
        console.log('에러가 발생했습니다.');
        console.log(error);
        return;
    }
}

async function deleteEnv() {
    const key = readlineSync.question('삭제하고 싶은 환경변수 key 이름을 입력해주세요.');
    let target = readlineSync.question('개발환경이면 develop, 프로덕션이면 production 이라고 입력해주세요.');
    if (target === 'develop') {
        target = ['preview', 'development'];
    } else if (target === 'production') {
        target = ['production'];
    } else {
        console.log('develop 또는 production 을 입력해주셔야 합니다.');
        return;
    }

    const envs = await getEnvList();

    id = envs.find(item => item.key === key && intersection(item.target, target).length > 0).id;

    const config = {
        method: 'delete',
        // url: `https://api.vercel.com/v9/projects/${PROJECT_ID}/env/${id}?teamId=${TEAM_ID}`,
        url: `https://api.vercel.com/v9/projects/${PROJECT_ID}/env/${id}`,
        headers: { 
            'Authorization': `Bearer ${TOKEN}`,
            'Content-Type': 'application/json'
        },
    };

    try {
        const response = await axios(config);
        console.log(JSON.stringify(response.data, null, 2));
    } catch (error) {
        console.log('에러가 발생했습니다.');
        console.log(error);
        return;
    }
}

async function pullEnv() {
    try {
        const envs = await getEnvList();

        if (!envs) {
            console.log('env 데이터가 없습니다.');
            return;
        }

        let developmentEnvData = envs.filter(item => item.target.includes('preview') || item.target.includes('development'));
        developmentEnvData = developmentEnvData.map(item => pick(item, ['key', 'value']));
        let developmentEnvText = '';
        developmentEnvData.forEach(item => {
            const key = item.key;
            const value = item.value;
            developmentEnvText += `${key}=${value}\n`;
        });

        let productionEnvData = envs.filter(item => item.target.includes('production'));
        productionEnvData = productionEnvData.map(item => pick(item, ['key', 'value']));
        let productionEnvText = '';
        productionEnvData.forEach(item => {
            const key = item.key;
            const value = item.value;
            productionEnvText += `${key}=${value}\n`;
        });

        await fs.writeFile(`./apps/${PROJECT_NAME}/.env.local`, developmentEnvText);
        await fs.writeFile(`./apps/${PROJECT_NAME}/.env.development`, developmentEnvText);
        await fs.writeFile(`./apps/${PROJECT_NAME}/.env.production`, productionEnvText);

        console.log('env파일 생성 완료.');
    } catch (error) {
        console.log('에러가 발생했습니다.');
        console.log(error);
        return;
    }
}