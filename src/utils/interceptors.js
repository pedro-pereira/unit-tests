class MockRequest {
    constructor(){
        this.params = {};
    }

    setParam(key, value){
        this.params = {...this.params, [key]: value};
    }
}

class MockResponse {
    constructor(){
        this.response = {
            status: 200,
        }
    }

    status(code = 200){
        this.response = {...this.response, status: code};
        return this;
    }

    json(toReturn){
        return {
            status: this.response.status,
            data: toReturn
        }
    }
}

module.exports = {
    MockRequest,
    MockResponse
}