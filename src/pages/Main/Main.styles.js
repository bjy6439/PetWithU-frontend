import styled from 'styled-components';

export const MainContainer = styled.div``;
export const MainImgBox = styled.div`
  width: 100vw;
  height: 300px;
  background-image: url('/images/main.png');
  background-size: cover;
  background-repeat: no-repeat;
  img {
  }
`;

export const TodayItemBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90vw;
  padding: 40px 0px 0px 40px;
`;

export const TodayItemWrap = styled.div`
  display: flex;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ListTitle = styled.p`
  font-size: 20px;
  margin-bottom: 50px;
`;

export const ItemList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const AllItemBox = styled.div`
  width: 90vw;
  padding: 40px 0px 0px 60px;
`;

export const AllItemListWrap = styled.div`
  width: 100vw;
  padding: 0px 30px 0px 30px;
`;

export const TodayItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 200px;
  padding: 10px;
  margin: 0px 10px 0px 10px;
`;

export const AllItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
  padding: 10px;
  margin: 0px 20px 30px 20px;
`;

export const ItemImg = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
  border: 1px solid black;
  border-radius: 10px;
`;

export const ItemTitle = styled.p`
  width: 200px;
  font-size: 14px;
  margin-bottom: 10px;
`;
export const ItemPrice = styled.p`
  font-size: 14px;
`;
