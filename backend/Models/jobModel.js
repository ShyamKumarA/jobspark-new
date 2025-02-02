import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "rejected", "review"],
    default: "review",
  },
});

const jobSchema = new mongoose.Schema(
  {
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
    },
    companyName: {
      type: String,
    },
    role: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    openingsCount: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    experience: {
      type: String,
      required: true,
    },
    packageAmount: {
      type: String,
      required: true,
    },
    education: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    locality: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    keySkills: [String],
    peopleApplied: [applicationSchema],
    typeOfPackage: {
      type: String,
      enum: ["free", "gold", "silver", "platinum"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);
export default Job;
