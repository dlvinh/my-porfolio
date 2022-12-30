import { isEmptyArray } from "formik";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjectList } from "../Services/FirebaseService";
import Card from "./Card";
import CardItem from "./CardItem";

export default function Experience() {
  const dispatch = useDispatch();
  const { projectList } = useSelector((state) => {
    console.log("projectList", state.UserState.projectList);
    return state.UserState;
  });

  useEffect(() => {
    console.log("first Run");
    if (isEmptyArray(projectList)) {
      dispatch(getProjectList());
    }
  }, [projectList]);

  return (
    <Card>
      {projectList.map(function (item, index) {
        return <CardItem item={item} key={index}></CardItem>;
      })}
    </Card>
  );
}
