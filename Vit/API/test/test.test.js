const axios = require('axios');
const { Validator } = require('jsonschema');
const covidSchema = require('../data/covid-19.schema.json')
const crunchSchema = require('../data/crunchBaseSearch.schema.json')
const dataForPost = require('../data/dataForPostCrunch.json')
const sendHttpRequest = require('../sendHttpRequest');


const options = {
    method: 'POST',
    url: 'https://crunchbase-crunchbase-v1.p.rapidapi.com/searches/organizations',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '2b3eb1778dmsh8398336fd8c5732p14f7a6jsnb4c80bdbc4be',
      'X-RapidAPI-Host': 'crunchbase-crunchbase-v1.p.rapidapi.com'
    },
    data: dataForPost
  };


const validator = new Validator();


describe('API testing', function () {


   
    test('Should be code 200 on the website covid-193.p.rapidapi.com', async() => {
        const response = await axios.get('https://covid-193.p.rapidapi.com/countries', {
            headers: {
                'X-RapidAPI-Key': '2b3eb1778dmsh8398336fd8c5732p14f7a6jsnb4c80bdbc4be',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        })
        await expect(response.status).toEqual(200)
       })



    test('Should be appropriate json schema of website covid-193.p.rapidapi.com', async() => {
        const response = await axios({
            method: 'get',
            url: 'https://covid-193.p.rapidapi.com/countries',
            headers:{
                'X-RapidAPI-Key': '2b3eb1778dmsh8398336fd8c5732p14f7a6jsnb4c80bdbc4be',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        })
        let validationResult = await validator.validate(response.data, covidSchema);
        await expect(validationResult.errors.length).toEqual(0);
    })



    test('Should be code 200 after http request on website covid-193.p.rapidapi.com', async() => {
        const config = {
            url: 'https://covid-193.p.rapidapi.com/countries',
            headers: {
                'X-RapidAPI-Key': '2b3eb1778dmsh8398336fd8c5732p14f7a6jsnb4c80bdbc4be',
                'X-RapidAPI-Host': 'covid-193.p.rapidapi.com'
            }
        }
        resp = await sendHttpRequest(config)
        await expect(resp).toBeValidStatusCode(200)
    })



    test('Should be appropriate json schema of website covid-193.p.rapidapi.com with http request', async() => {
        await expect(resp).toBeValidSchema(covidSchema);
    })



    test('Should be code 200  after POST method on the website crunchbase-crunchbase-v1.p.rapidapi.com', async() => {
        const response = await axios.request(options)
        await expect(response.status).toEqual(200)
       })


    
    test('Should be appropriate json schema  after POST method of website crunchbase-crunchbase-v1.p.rapidapi.com', async() => {
        const response = await axios(options)
        let validationResult = await validator.validate(response.data, crunchSchema);
        await expect(validationResult.errors.length).toEqual(0);
    })


// Решил опробовать на своих запросах HTTP request.


    test('Should be code 200 after http POST after http request on website crunchbase-crunchbase-v1.p.rapidapi.com', async() => {
        resp = await sendHttpRequest(options)
        await expect(resp).toBeValidStatusCode(200)
    })



    test('Should be appropriate json schema of website  crunchbase-crunchbase-v1.p.rapidapi.com with http request POST', async() => {
        await expect(resp).toBeValidSchema(crunchSchema);
    })


})
