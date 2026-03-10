import { useState, useEffect } from "react";

type Job = {
  by: string,
  id: number,
  score: number,
  time: number,
  title: string,
  type: string,
  url: string
}

const storiesUrl = "https://hacker-news.firebaseio.com/v0/jobstories.json";

const constructUrl = (url: number) => {
  return `https://hacker-news.firebaseio.com/v0/item/${url}.json`;
};

export const JobBoard = () => {
  const [data, setData] = useState<Job[]>([]);
  const [increase, setIncrease] = useState(6);

  useEffect(() => {
    fetch(storiesUrl)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        resData.forEach((el: number) => {
          fetch(constructUrl(el))
            .then((res) => {
              return res.json();
            })
            .then((responseData) => {
              setData((prev) => [...prev, responseData]);
            });
        });
      });
  }, []);

  return (
    <div>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "orange",
          marginLeft: "15px",
        }}
      >
        Hacker News Jobs Board
      </div>
      <div>
        {data && data.slice(0, increase).map((el) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "15px",
                padding: "15px",
              }}
            >
              <div>{el.title}</div>
              <div style={{ display: "flex" }}>
                <div style={{ marginRight: "15px" }}>By: {el.by}</div> -
                <div style={{ marginLeft: "10px" }}>{el.time}</div>
              </div>
            </div>
          );
        })}
      </div>

      <button
        style={{
          marginLeft: "15px",
          marginTop: '10px',
          padding: "10px 15px",
          backgroundColor: "orange",
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          color: 'white'
        }}
        onClick={() => setIncrease(prev => prev + 6)}
      >
        Load More Jobs
      </button>
    </div>
  );
}
