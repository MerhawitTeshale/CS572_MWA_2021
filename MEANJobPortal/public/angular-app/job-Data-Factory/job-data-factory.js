angular.module('meanJobs').factory('JobDataFactory',JobDataFactory);

function JobDataFactory($http){
    return{
        getAll:getAllJobs,
        nextPage:getNextJobs,
        getOne:getOneJob,
        addOne:addOneJob,
        delete:deleteJob,
        fullUpdate:fullUpdateJob,
        partialUpdate:partialUpdateJob,
        search:searchJob,
        addSkill:addSkillToJob
    }

    function getAllJobs(){
        return $http.get('api/jobs').then(complete).catch(failed);
    }
    function getNextJobs(offset,count){
        return $http.get('api/jobs?offset='+offset+'&count='+count).then(complete).catch(failed);
    }

    function getOneJob(id){
        return $http.get('api/jobs/'+id).then(complete).catch(failed);
    }

    function addOneJob(newJob){
        return $http.post('api/jobs',newJob).then(complete).catch(failed);
    }


    function deleteJob(id){
        return $http.delete('api/jobs/'+id).then(complete).catch(failed);
    }
    function searchJob(searchIp){
        console.log(`am i here?`)
        return $http.get('api/jobs/search?search='+searchIp).then(complete).catch(failed);
    }
    function fullUpdateJob(id,updatedJob){
        return $http.put('api/jobs/'+id, updatedJob).then(complete).catch(failed);
    }
    function partialUpdateJob(id,updatedJob){
        return $http.patch('api/jobs/'+id,updatedJob).then(complete).catch(failed);
    }
    function addSkillToJob(id,skill){
        return $http.post('api/jobs/'+id+'/skills',skill);
    }

    function complete(response){
        return response.data;
    }

    function failed(error){
        return error.status.statusText;
    }
}