import React, { useState, useEffect } from 'react'
import DocumentsList from './DocumentsList';
import ChatBox from './ChatBox';


function Layout() {
  const storedBoardId = sessionStorage.getItem('boardId');
  console.log("s boardid", storedBoardId);
  const [files, setFiles] = useState([])
  const [showMain, setShowMain] = useState(true);

  useEffect(() => {
    fetchData();
  }, [storedBoardId]);

  const fetchData = () => {
    let query = `query { boards (ids: ${storedBoardId}) {items_page (limit: 100) { items { assets {id name public_url }}}}}`

    fetch("https://api.monday.com/v2", {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzI1NiJ9.eyJ0aWQiOjMxMzY1ODQxMCwiYWFpIjoxMSwidWlkIjo1MzYwNjYxMSwiaWFkIjoiMjAyNC0wMS0yNFQxMTo0MDo1Ni4wMDBaIiwicGVyIjoibWU6d3JpdGUiLCJhY3RpZCI6MTAxNjc0NzQsInJnbiI6InVzZTEifQ.lG2wOhPzU9DJNGa_Kc_Y75SouPrHCsaOyTnC9eU0I14',
      },
      body: JSON.stringify({
        'query': query
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.data && res.data.boards) {
          const fileDetails = res.data.boards[0].items_page.items.flatMap(item =>
            item.assets.map(asset => {
              const fileUrl = asset.public_url;
              return { id: asset.id, public_url: fileUrl, name: asset.name };
            }),
          );
          if (fileDetails) {

            setFiles(fileDetails);
            // console.log("file details", fileDetails);
          }
        }
      })
      .catch(error => console.error('Error:', error));
  };

  const handleToggleMain = () => {
    console.log("func called")
    setShowMain(!showMain);
  };


  return (
    <div className="main_container">
      <div className='files_con'>
        <DocumentsList fileData={files} toggleMain={handleToggleMain} />
      </div>
      <div className='chat_con'>
        <ChatBox showMain={showMain} />
      </div>
    </div>
  )
}

export default Layout;
