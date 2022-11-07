import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import moment from "moment/moment";
import { jobServices } from "../services/job-services";

export default function List() {
  const navigate = useNavigate();
  const [jobList, setJobList] = useState([]);
  const [filteredJob, setFilteredJob] = useState([])
  const [search, setSearch] = useState('');

  const fetchData = async () => {
    await jobServices.getJobList().then((res) => {
      console.log(res);
      if (res.status === 200) {
        setJobList(res.data); 
        setFilteredJob(res.data)
      } else {
        alert(res.data.message);
      }
    });
  };

  const goToDetails = (id) => {
    navigate("/detail/"+id);
  };

  const handleSearchInput = (value) => {
    setSearch(value)
    const newData = jobList.filter(item => item.location.toLowerCase().includes(value))
    setFilteredJob(newData)
  }

  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="flex flex-col gap-3">
      <div className='flex justify-between items-center'>
        <div className='flex flex-col gap-2 rounded-2xl justify-center items-center bg-gray-200 p-2 w-full'>
            <h1 className="text-2xl">Search Job Location</h1>
            <input className='border rounded-xl w-1/2 h-14 text-2xl p-2 font-semibold' autoFocus={true} onChange={(e)=> handleSearchInput(e.target.value)} placeholder='filter by location' type="text" />
        </div>
    </div>
    <h1 className="text-center text-3xl font-semibold border-b-2 border-gray-500">JOB LIST</h1>
      <div>
        {filteredJob.map((item, index) => (
          <div key={index}>
            <div className="flex justify-between items-center border-b">
              <div className="flex flex-col mx-3 my-2">
                <h1 className="cursor-pointer text-2xl font-semibold hover:text-blue-500" onClick={()=>goToDetails(item.id)}>{item.title.length > 55 ? item.title.substring(0,54)+ "...." : item.title }</h1>
                <h1><span className="text-sm text-gray-500">{item.company}</span> - <span className="text-sm font-semibold text-green-500">{item.type}</span></h1> 
              </div>
              <div className="text-right">
                <h1 className="text-sm">{item.location}</h1>
                <h1 className="text-sm">{moment(item.created_at).fromNow()}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
