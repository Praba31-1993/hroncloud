"use client";
import React from "react";
import Upload_document from "./upload_document";
import Outlinebutton from "@/app/reusableComponent/outlinebtn";
import { Colors } from "@/app/reusableComponent/styles";

function Personal_address({ selectedOption, setSelectedOption }:any) {
  const useColors = Colors();

  return (
    <div className="dashboardcard px-3 py-4 rounded">
      <div className="row">
        <div className="col-12 px-0 mb-3">
          <div className="row">
            <div className="col-md-3">
              <select
                className="selectborder textheader py-2 w-100 rounded px-2"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
              >
                <option value="1">Personal address</option>
                <option value="2">Emergency address</option>
                <option value="3">Work address</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-md-3 mb-3">
          <input className="selectborder textheader py-2 w-100 rounded px-2" type="text" placeholder="Address" />
        </div>
        <div className="col-md-3 mb-3">
          <input className="selectborder textheader py-2 w-100 rounded px-2" type="text" placeholder="City" />
        </div>
        <div className="col-md-3 mb-3">
          <input className="selectborder textheader py-2 w-100 rounded px-2" type="text" placeholder="State" />
        </div>
        <div className="col-md-3 mb-3">
          <select className="selectborder textheader py-2 w-100 rounded px-2">
            <option value="0">Country</option>
            <option value="1">India</option>
            <option value="2">US</option>
          </select>
        </div>
        <div className="col-md-3 mb-3">
          <input className="selectborder textheader py-2 w-100 rounded px-2" type="email" placeholder="Postal code" />
        </div>

        {/* Document Upload */}
        <div className="col-12 px-0">
          <Upload_document />
        </div>

        <div className="col-12 mt-4">
          <div className="d-flex justify-content-end gap-3">
            <Outlinebutton
              color={useColors.themeRed}
              border={`1px solid ${useColors.themeRed}`}
              text="Cancel"
              fontSize="12px"
              background={"transparent"}
              iscontactus={true}
            />
            <Outlinebutton
              color={useColors.white}
              border={`1px solid ${useColors.themeRed}`}
              text="Submit"
              fontSize="12px"
              background={useColors.themeRed}
              iscontactus={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Personal_address;
