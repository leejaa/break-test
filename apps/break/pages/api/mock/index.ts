import { Client } from '@notionhq/client';
import axios from 'axios';
import { MockType, MOCK_PROPERTY } from 'specifics/mocking/utils/api/mock';

const NOTION_TOKEN = 'secret_m7wZwX0CfCBvd7ogjNChWOU2dDAtSBHmRf6uMDkhQbt';
export const notion = new Client({ auth: NOTION_TOKEN })
const NOTION_DATABASE_ID = 'a1bef359792540e9ac210eb3fe3ecd57';
const PAGE_ID = '68f608b5a3e94675b6659c8b7a130d2c';
const NOTION_VERSION = '2022-02-22';

const COMMON_CONFIG = {
    method: 'post',
    url: 'https://api.notion.com/v1/databases/',
    headers: { 
        'Content-Type': 'application/json', 
        'Notion-Version': NOTION_VERSION, 
        'Authorization': `Bearer ${NOTION_TOKEN}`
    },
};

function createDatabase() {
    const data = JSON.stringify({
        "parent": {
          "type": "page_id",
          "page_id": PAGE_ID
        },
        "title": [
          {
            "type": "text",
            "text": {
              "content": "번역 데이터베이스",
              "link": null
            }
          }
        ],
        "properties": {
          [MOCK_PROPERTY.id]: {
            "title": {}
          },
          [MOCK_PROPERTY.name]: {
            "rich_text": {}
          },
          [MOCK_PROPERTY.age]: {
              "rich_text": {}
          },
          [MOCK_PROPERTY.gender]: {
              "rich_text": {}
          },
        }
      });
      
      const config = {
        ...COMMON_CONFIG,
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
}

async function get() {
    const result = await notion.databases.query({
        database_id: NOTION_DATABASE_ID,
    })
    const data = result.results;
    const resultData = data.map(item => ({
        id: item.id,
        name: item['properties'][MOCK_PROPERTY.name].rich_text[0].plain_text,
        age: item['properties'][MOCK_PROPERTY.age].rich_text[0].plain_text,
        gender: item['properties'][MOCK_PROPERTY.gender].rich_text[0].plain_text,
    }))
    return resultData;
}

async function post(params: MockType) {
    const { age, gender, name } = params;
    const response = await notion.pages.create({
        parent: { database_id: NOTION_DATABASE_ID },
        properties: {
            id: {
            type: 'title',
            title: [
                {
                type: 'text',
                text: {
                    content: `${Math.floor(Math.random() * 10000000000)}`,
                },
                },
            ],
            },
            name: {
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: name
                        }
                    }
                ]
            },
            age: {
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: age
                        }
                    }
                ]
            },
            gender: {
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: gender
                        }
                    }
                ]
            }
        },
    })
}

export async function deleteFunction(id: string) {
    await notion.blocks.delete({
        block_id: id,
    })
}

export async function update(params: { id: string } & Partial<MockType>) {
    const { id, age, gender, name } = params;
    await notion.pages.update({
        page_id: id,
        properties: {
            name: {
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: name
                        }
                    }
                ]
            },
            age: {
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: age
                        }
                    }
                ]
            },
            gender: {
                rich_text: [
                    {
                        type: 'text',
                        text: {
                            content: gender
                        }
                    }
                ]
            }
        }
    })
}

export default async function handler(req, res) {
    try {
        if (req.method === 'GET') {
            const data = await get();
            res.status(200).json(data);
        } else if (req.method === 'POST') {
            await post(req.body);
            res.status(200).json({ success: true });
        }
    } catch (error) {
        res.status(400).json({ error });
    }
}