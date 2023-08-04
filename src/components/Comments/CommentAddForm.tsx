"use client";

import AddCommentsToDB from "@/features/AddCommentToDB/AddCommentToDB";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CommentAddForm = ({ ticketId }: { ticketId: number }) => {
  const [content, setContent] = useState("");
  const router = useRouter();
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Post a comment</span>
      </label>
      <textarea
        className="textarea text-base textarea-bordered h-24"
        value={content}
        placeholder="Type here"
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button
        onClick={(e) => {
          AddCommentsToDB({ ticketId, content }, e);
          setContent("");
          router.refresh();
        }}
        className="mt-5 btn btn-secondary btn-wide max-w-[200px] "
      >
        {" "}
        Add Comment
      </button>
    </div>
  );
};

export default CommentAddForm;
