import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import httpService from "../../services/http.service";
import { CanceledError } from "axios";
import { CustomSelect } from "../../shared/components/multiselect-dropdown/multiselect-dropdown";
import { datePipe } from "../../utilities/date-pipe";
import { Controller, useForm } from "react-hook-form";
import { data } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-select";
import AutocompleteSearchBox from "../../shared/components/autocomplete-searchbox/autocomplete-searchbox";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
// interface FormData {
//   name: string;
//   age: number;
//   gender: string;
//   subjects: string[];
//   dob: string;
//   appointment: string;
//   file: FileList;
//   payment: string;
//   subscription: boolean;
// }

const DemoForm = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<"">("");
  const [isLoading, setLoader] = useState<boolean>(false);
  const [selected, setSelected] = useState<typeof options>([]);
  const options = [
    { label: "Math", value: "math" },
    { label: "Science", value: "science" },
    { label: "History", value: "history" },
    { label: "English", value: "english" },
  ];
  const countries = [
    { label: "USA", value: "usa" },
    { label: "Canada", value: "canada" },
    { label: "UK", value: "uk" },
    { label: "Australia", value: "australia" },
  ];
  // useEffect(() => {
  //   setLoader(true);
  //   const { request, cancel } = httpService.getAll<any>(
  //     "api/student/getsubjects"
  //   );
  //   request
  //     .then((res) => {
  //       console.log(res.data);
  //       //setUsers(res.data);
  //     })
  //     .catch((err) => {
  //       setUsers([]);
  //       if (err instanceof CanceledError) return;
  //       setError(err.message);
  //     })
  //     .finally(() => {
  //       setLoader(false);
  //     });
  // }, []);

  const dob = new Date();

  const schema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    age: z
      .number({
        error: "Age is required",
      })
      .min(1, { message: "Age must be at least 1" })
      .max(30, { message: "Age must be at most 30" }),
    gender: z.string().refine((val) => val.trim() !== "", {
      message: "Gender is required",
    }),
    subjects: z
      .array(z.string())
      .min(1, { message: "Please select at least one subject" }),
    dob: z.coerce
      .date({
        error: (issue) =>
          issue.input === undefined ? "Date is required" : "Invalid date",
      })
      .min(new Date("2000-01-01"), { error: "Too early!" })
      .max(new Date("2025-12-31"), { error: "Too late!" }),
    appointment: z.preprocess(
      (val) => (val === "" ? undefined : val),
      z.coerce.date().optional()
    ),
    file: z.instanceof(FileList).optional(),
    payment: z.string({
      error: "Payment is required",
    }),
    subscription: z.boolean(),
    country: z.string().optional(),
  });

  type FormData = z.infer<typeof schema>;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema) as any,
    defaultValues: {
      name: "",
      age: 0,
      gender: "",
      subjects: [],
      dob: undefined, // initial date
      appointment: undefined, // optional
      file: undefined,
      payment: "credit",
      subscription: false,
      country: "",
    },
  });

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <div className="container mt-4">
        <h2 className="mb-4">
          Bootstrap Demo Form {datePipe(dob, "dd/MM/yyyy")}
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="row g-3">
          {/* Text input */}
          <div className="col-md-6">
            <label className="form-label">Full Name</label>
            <input
              type="text"
              className="form-control"
              {...register("name")}
              // value={formData.name}
              // onChange={handleChange}
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
          </div>

          {/* Number input */}
          <div className="col-md-6">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              {...(register("age", { valueAsNumber: true }) as any)}
              // value={formData.age}
              // onChange={handleChange}
              placeholder="Enter your age"
            />
            {errors.age && <p className="text-danger">{errors.age.message}</p>}
          </div>

          {/* Dropdown */}
          <div className="col-md-6">
            <label className="form-label">Gender</label>
            <select
              className="form-select"
              {...register("gender")}
              // value={formData.gender}
              // onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="text-danger">{errors.gender.message}</p>
            )}
          </div>

          {/* File upload */}
          <div className="col-md-6">
            <label className="form-label">Upload File</label>
            <input
              type="file"
              className="form-control"
              {...register("file")}
              //onChange={handleChange}
            />
          </div>
          {/* Multi-select Dropdown */}
          <div className="col-md-6">
            <label className="form-label">Multiselect (Custom)</label>
            <Controller
              name="subjects"
              control={control}
              render={({ field }) => (
                <>
                  <CustomSelect
                    options={options}
                    value={options.filter((o) => field.value.includes(o.value))} // selected options
                    onChange={(selectedOptions) => {
                      field.onChange(selectedOptions.map((o) => o.value)); // store array of values
                    }}
                    multi={true}
                    searchable={true}
                    placeholder="Select subjects"
                    selectAll={true}
                    selectAllLabel="Select All Subjects"
                  />
                  {errors.subjects && (
                    <p className="text-danger">{errors.subjects.message}</p>
                  )}
                  <div className="mt-2">
                    Selected:{" "}
                    {options
                      .filter((o) => field.value.includes(o.value))
                      .map((s) => s.label)
                      .join(", ")}
                  </div>
                </>
              )}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Multiselect (Library)</label>
            <Controller
              name="country"
              control={control}
              render={({ field }) => (
                <>
                  <Select
                    options={countries}
                    isSearchable={true} // allows typing/search
                    isMulti={true}
                    placeholder="Select a country"
                  />
                  {errors.country && (
                    <p className="text-danger">{errors.country.message}</p>
                  )}
                </>
              )}
            />
          </div>
          {/* <div className="col-md-6">
            <label className="form-label">Hobbies</label>
            <select
              className="form-select"
              name="hobbies"
              multiple
              // value={formData.hobbies}
              // onChange={handleChange}
            >
              <option value="reading">Reading</option>
              <option value="traveling">Traveling</option>
              <option value="sports">Sports</option>
              <option value="coding">Coding</option>
            </select>
          </div> */}

          {/* Date */}
          <div className="col-md-6">
            <Controller
              control={control}
              name="dob"
              render={({ field }) => (
                <div className="col-md-6">
                  <label className="form-label">Date of Birth (Library)</label>
                  <ReactDatePicker
                    className="form-control"
                    selected={field.value}
                    onChange={(date) => field.onChange(date)}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="Select date"
                  />
                  {errors.dob && (
                    <p className="text-danger">{errors.dob.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          {/* Datetime */}
          <div className="col-md-6">
            <label className="form-label">
              Appointment Date & Time (Raw Html)
            </label>
            <input
              type="datetime-local"
              className="form-control"
              {...register("appointment")}
              // value={formData.appointment}
              // onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Autocomplete (Custom)</label>
            <AutocompleteSearchBox
              placeholder="Type country..."
              suggestions={countries.map((c) => c.label)}
              onSelect={(value) => console.log("Selected:", value)}
            />
          </div>
          <div className="col-md-6"></div>
          {/* Radio buttons */}
          <div className="col-md-6">
            <label className="form-label">Payment Method</label>
            <div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  {...register("payment")}
                  value="credit"
                  // checked={formData.payment === "credit"}
                  // onChange={handleChange}
                />
                <label className="form-check-label">Credit Card</label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  type="radio"
                  className="form-check-input"
                  {...register("payment")}
                  value="paypal"
                  // checked={formData.payment === "paypal"}
                  // onChange={handleChange}
                />
                <label className="form-check-label">PayPal</label>
              </div>
              {errors.payment && (
                <p className="text-danger">{errors.payment.message}</p>
              )}
            </div>
          </div>

          {/* Checkbox */}
          <div className="col-12">
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                {...register("subscription")}
                //   checked={formData.subscription}
                //   onChange={handleChange}
              />
              <label className="form-check-label">
                Subscribe to Newsletter
              </label>
            </div>
          </div>

          {/* Submit button */}
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Submit Form
            </button>
          </div>
        </form>
        {/* Table */}
        <div className="mt-5">
          <h3>Submitted Records</h3>
          <div className="table-responsive">
            <table className="table table-bordered table-striped">
              <thead className="table-dark">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>User Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Website</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center">
                      No records yet
                    </td>
                  </tr>
                ) : (
                  users.map((user, index) => (
                    <tr key={index}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>
                        <button className="btn btn-primary">Edit</button>
                        <button className="btn btn-outline-danger">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoForm;
