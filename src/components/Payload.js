import React from "react";
import { useState } from "react";

const Payload = () => {
  // This is related to the Project Metadata
  const [groupId, setGroupId] = useState("com.tse");
  const [artifactId, setArtifactId] = useState("sample");
  const [name, setName] = useState("sample");
  const [description, setDescription] = useState(
    "Sample project by TSE initializer"
  );
  const [packageName, setPackageName] = useState("com.tse.sample");

  //THESE USESTATES ARE FOR PROJECT CONFIGURATION
  const [buildType, setBuildType] = useState("maven");
  const [language, setLanguage] = useState("java");
  const [springBootVersion, setSpringBootVersion] = useState("3.1.3");
  const [packaging, setPackaging] = useState("jar");
  const [javaVersion, setJavaVersion] = useState("20");

  const handleGroupIdChange = (e) => {
    setGroupId(e.target.value);
    generatePackageName(e.target.value, artifactId);
  };

  const handleArtifactIdChange = (e) => {
    setArtifactId(e.target.value);
    generatePackageName(groupId, e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handledescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const generatePackageName = (groupId, artifactId) => {
    const formattedGroupId = groupId.replace(/\s+/g, "-").toLowerCase();
    const formattedArtifactId = artifactId.replace(/\s+/g, "-").toLowerCase();
    const generatedPackageName = `${formattedGroupId}.${formattedArtifactId}`;
    setPackageName(generatedPackageName);
  };

  //THIS IS RELATED TO THE PROJECT Dependencies

  const [showCustomDependencies, setShowCustomDependencies] = useState(false);
  const [customDependencies, setCustomDependencies] = useState("");

  const toggleCustomDependencies = () => {
    setShowCustomDependencies(!showCustomDependencies);
  };

  const handleCustomDependenciesChange = (e) => {
    setCustomDependencies(e.target.value);
  };

  const randomDependencies = [
    "react",
    "axios",
    "lodash",
    "express",
    "mongodb",
    "redux",
  ];

  return (
    <div className="main flex  rounded-lg justify-center w-4/5 ">
      <form
        className="payload_form justify-center w-full flex -4 rounded-lg"
        action="generate"
        method="POST"
      >
        <div className="the_form flex w-full rounded-lg  justify-around  ">
          {/* rounded left conrners here */}
          <div className="combine flex flex-1 flex-col bg-[#1d1f22] rounded-l-lg ">
            <div className=" text-white p-8   ">
              {/* THE PROJECT METADATA SECTION STARTS HERE */}

              <h2 className="bg-blue-500 w-[160px] px-2 py-2 font-semibold mb-4 text-center rounded-lg">
                Project Metadata
              </h2>
              <div className="metadata ml-6 mr-6 flex-col ">
                {/* Group Id Starts Here */}
                <div className="flex items-center  mb-6">
                  <label className="w-1/6 mr-4 text-sm font-medium">
                    Group ID:
                  </label>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2  rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={groupId}
                    onChange={handleGroupIdChange}
                  />
                </div>
                {/* Group Id Ends Here */}

                {/* Artifact Id Starts Here */}

                <div className="flex items-center mb-6">
                  <label className="w-1/6 mr-4 text-sm font-medium">
                    Artifact ID:
                  </label>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2  rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={artifactId}
                    onChange={handleArtifactIdChange}
                  />
                </div>

                {/* Artifact Id Ends Here */}

                {/* Name Starts Here */}

                <div className="flex items-center mb-6">
                  <label className="w-1/6 mr-4 text-sm font-medium">
                    Name:
                  </label>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2  rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>

                {/* Name Ends Here */}

                {/* Description Starts Here */}

                <div className="flex items-center mb-6">
                  <label className="w-1/6 mr-4 text-sm font-medium">
                    Description:
                  </label>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2  rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={description}
                    onChange={handledescriptionChange}
                  />
                </div>

                {/* Description Ends Here */}

                {/* Package Id Starts Here */}

                <div className="flex items-center mb-6">
                  <label className="w-1/6 mr-4 text-sm font-medium ">
                    Package Name:
                  </label>
                  <input
                    type="text"
                    className="flex-1 px-3 py-2  rounded-lg bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                    value={packageName}
                    readOnly
                  />
                </div>
                {/* Package Id Ends Here */}
              </div>
            </div>

            {/* Project Metadata Ends Here */}

            {/* THIS ARE THE FORM FIELDS FOR PROJECT CONFIGURATION */}

            <div className=" text-white p-8 ">
              <h2 className="bg-blue-500 w-[180px] py-2 font-semibold mb-4 text-center rounded-lg">
                Project Configuration
              </h2>

              {/* Build Type Starts Here */}

              <div className="mb-4  items-center  flex">
                <label className="block mt-2 mb-2 w-1/5 items-center font-medium text-gray-300  ">
                  Build Type :
                </label>
                <div className="flex  space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="maven"
                      checked={buildType === "maven"}
                      onChange={() => setBuildType("maven")}
                      className="mr-2"
                    />
                    Maven
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="gradle-groovy"
                      checked={buildType === "gradle-groovy"}
                      onChange={() => setBuildType("gradle-groovy")}
                      className="mr-2"
                    />
                    Gradle Groovy
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="gradle-kotlin"
                      checked={buildType === "gradle-kotlin"}
                      onChange={() => setBuildType("gradle-kotlin")}
                      className="mr-2"
                    />
                    Gradle Kotlin
                  </label>
                </div>
              </div>
              {/* Build Type Ends Here */}

              {/* Language Starts Here */}
              <div className="mb-4 flex">
                <label className="block mb-2 w-1/5 font-medium text-gray-300 -2 -green-800</div>">
                  Language:
                </label>
                <div className="flex space-x-4 ">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="java"
                      checked={language === "java"}
                      onChange={() => setLanguage("java")}
                      className="mr-2"
                    />
                    Java
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="kotlin"
                      checked={language === "kotlin"}
                      onChange={() => setLanguage("kotlin")}
                      className="mr-2"
                    />
                    Kotlin
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="groovy"
                      checked={language === "groovy"}
                      onChange={() => setLanguage("groovy")}
                      className="mr-2"
                    />
                    Groovy
                  </label>
                </div>
              </div>
              {/* Language Ends Here */}

              {/* Spring Boot Version Starts Here */}

              <div className="mb-4 flex">
                <label className="block w-1/5 mb-2 font-medium text-gray-300">
                  Spring Boot :
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="3.1.3"
                      checked={springBootVersion === "3.1.3"}
                      onChange={() => setSpringBootVersion("3.1.3")}
                      className="mr-2"
                    />
                    3.1.3
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="3.0.10"
                      checked={springBootVersion === "3.0.10"}
                      onChange={() => setSpringBootVersion("3.0.10")}
                      className="mr-2"
                    />
                    3.0.10
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="2.7.15"
                      checked={springBootVersion === "2.7.15"}
                      onChange={() => setSpringBootVersion("2.7.15")}
                      className="mr-2"
                    />
                    2.7.15
                  </label>
                </div>
              </div>

              {/* Spring Boot Version Ends Here */}

              {/* Packaging Type Starts Here */}
              <div className="mb-4 flex">
                <label className="block w-1/5 mb-2 font-medium text-gray-300">
                  Package:
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="jar"
                      checked={packaging === "jar"}
                      onChange={() => setPackaging("jar")}
                      className="mr-2"
                    />
                    jar
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="war"
                      checked={packaging === "war"}
                      onChange={() => setPackaging("war")}
                      className="mr-2"
                    />
                    war
                  </label>
                </div>
              </div>

              {/* Packaging Type Ends Here */}

              {/* Java Version */}
              <div className="mb-4 flex">
                <label className="block w-1/5 mb-2 font-medium text-gray-300">
                  Java Version:
                </label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="20"
                      checked={javaVersion === "20"}
                      onChange={() => setJavaVersion("20")}
                      className="mr-2"
                    />
                    20
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="17"
                      checked={javaVersion === "17"}
                      onChange={() => setJavaVersion("17")}
                      className="mr-2"
                    />
                    17
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="11"
                      checked={javaVersion === "11"}
                      onChange={() => setJavaVersion("11")}
                      className="mr-2"
                    />
                    11
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      value="8"
                      checked={javaVersion === "8"}
                      onChange={() => setJavaVersion("8")}
                      className="mr-2"
                    />
                    8
                  </label>
                </div>
              </div>

              {/* Java Version Ends Here */}
            </div>

            {/* Project Configuration Ends Here */}
          </div>

          {/* THIS ARE THE FORM FIELDS FOR DEPENDENCIES */}

          <div className="dependency-main  w-2/5   ">
            <div className="bg-[#1d1f22] h-full  text-white p-8  shadow-lg rounded-r-lg">
              <div className="flex-col  items-center ">
                {/* The Add Dependencies Starts Here */}
                <div className="mb-4 items-center ">
                  <div className="flex flex-1 mb-2">
                    <button
                      type="button"
                      onClick={toggleCustomDependencies}
                      className="ml-2 bg-blue-500 rounded-lg px-4 py-2 focus:outline-none"
                    >
                      Add Dependencies
                    </button>
                  </div>
                  {showCustomDependencies && (
                    <select className="w-full px-3 py-2  rounded-lg bg-gray-700 focus:outline-none focus:-blue-500">
                      {randomDependencies.map((dependency, index) => (
                        <option key={index} value={dependency}>
                          {dependency}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>

              {/* The Add Dependencies Ends Here */}

              {/* Cusotom Dependencies Start Here */}
              <div className="mb-4">
                <label className="block mb-2 text-sm font-medium text-gray-300">
                  Custom Dependencies (XML format):
                </label>
                <textarea
                  className="w-full h-20 px-3 py-2  rounded-lg bg-gray-700 text-white focus:outline-none focus:-[#161B22]"
                  value={customDependencies}
                  onChange={handleCustomDependenciesChange}
                />
              </div>
              {/* Cusotom Dependencies Ends Here */}

              {/* Button Starts Here */}
              <button
                type="submit"
                className=" px-4 items-end py-2 bg-blue-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
              >
                Create Project
              </button>
              {/* Button Ends Here */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Payload;
