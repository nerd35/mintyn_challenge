import React from "react";
import {
  Pagination,
  PaginationActive,
  PaginationColumn,
  PaginationLink,
  PaginationSection,
  PaginationText,
  PaymentBodyColumn,
  PaymentBodyImg,
  PaymentBodyRow,
  PaymentBodyText,
  PaymentColumn,
  PaymentContainer,
  PaymentDiv,
  PaymentFilterContainer,
  PaymentFilterSelect,
  PaymentFilterText,
  PaymentHeadColumn,
  PaymentHeadRow,
  PaymentSearchdiv,
  PaymentSearchIcon,
  PaymentSearchText,
  PaymentShowSelect,
  PaymentTableContainer,
  PaymentTitle,
  StatusPending,
  StatusRecon,
  StatusUnRecon,
} from "./payment.element";
import SearchIcon from "../../assets/Search.png";
import GreenCircle from '../../assets/Ellipse 2.png'
import YellowCircle from '../../assets/Ellipse 3.png'
import GrayCircle from '../../assets/Ellipse 4.png'
import ArrowDown from '../../assets/arrow1.png'
import { TableData } from "./data";

const PaymentTable = () => {
  return (
    <PaymentContainer>
      <PaymentTitle>Payments</PaymentTitle>
      <PaymentFilterContainer>
        <PaymentColumn>
          <PaymentDiv>
            <PaymentFilterText>Showing</PaymentFilterText>
          </PaymentDiv>
          <PaymentDiv>
            <PaymentFilterSelect>
              <option value="">20</option>
            </PaymentFilterSelect>
          </PaymentDiv>
          <PaymentDiv>
            <PaymentFilterText style={{ marginLeft: "13px" }}>
              out of 500 payments
            </PaymentFilterText>
          </PaymentDiv>
        </PaymentColumn>
        <PaymentColumn>
          <PaymentSearchdiv>
            <PaymentSearchIcon src={SearchIcon} alt="search icon" />
            <PaymentSearchText placeholder="Search payments" />
          </PaymentSearchdiv>
        </PaymentColumn>
        <PaymentColumn>
          <PaymentDiv>
            <PaymentFilterText>Show</PaymentFilterText>
            <PaymentShowSelect>
              <option value="">All</option>
              <option value="">Reconcilled</option>
              <option value="">Un-reconcilled</option>
              <option value="">Settled</option>
              <option value="">Unsettled</option>
            </PaymentShowSelect>
          </PaymentDiv>
        </PaymentColumn>
      </PaymentFilterContainer>

      <PaymentTableContainer>
        <PaymentHeadRow>
          <PaymentHeadColumn>Item Type</PaymentHeadColumn>
          <PaymentHeadColumn>Price</PaymentHeadColumn>
          <PaymentHeadColumn>Transaction No</PaymentHeadColumn>
          <PaymentHeadColumn>Time</PaymentHeadColumn>
          <PaymentHeadColumn>Status</PaymentHeadColumn>
          <PaymentHeadColumn></PaymentHeadColumn>
        </PaymentHeadRow>
        {TableData.map((data) => (
          <PaymentBodyRow key={data.id}>
            <PaymentBodyColumn style={{ display: "flex" }}>
              <PaymentBodyImg src={data.img} alt="" />
              <PaymentBodyText style={{ marginLeft: "26px" }}>
                {data.itemType}
              </PaymentBodyText>
            </PaymentBodyColumn>
            <PaymentBodyColumn>
              <PaymentBodyText>{data.price}</PaymentBodyText>
            </PaymentBodyColumn>
            <PaymentBodyColumn>
              <PaymentBodyText>{data.transactionNo}</PaymentBodyText>
            </PaymentBodyColumn>
            <PaymentBodyColumn>
              <PaymentBodyText>{data.time}</PaymentBodyText>
            </PaymentBodyColumn>
            <PaymentBodyColumn>
              <PaymentBodyText>{data.status === "Reconcilled" ? <StatusRecon><img src={GreenCircle} alt=""/> Reconcilled</StatusRecon> : data.status === "Pending" ? <StatusPending><img src={YellowCircle} alt=""/> Pending</StatusPending> : <StatusUnRecon><img src={GrayCircle} alt=""/> Un-reconcilled</StatusUnRecon>}</PaymentBodyText>
            </PaymentBodyColumn>
            <PaymentBodyColumn>
              <PaymentBodyText><img src={ArrowDown} alt=""/></PaymentBodyText>
            </PaymentBodyColumn>
          </PaymentBodyRow>
        ))}
      </PaymentTableContainer>

          <PaginationSection>
            <PaginationColumn>
              <PaginationText>Showing 1 to 10 of 500 entries</PaginationText>
            </PaginationColumn>
            <PaginationColumn>
              <Pagination>
                <PaginationLink>Previous</PaginationLink>
                <PaginationActive>1</PaginationActive>
                <PaginationLink>2</PaginationLink>
                <PaginationLink>Next</PaginationLink>
              </Pagination>
            </PaginationColumn>
          </PaginationSection>

    </PaymentContainer>
  );
};

export default PaymentTable;
