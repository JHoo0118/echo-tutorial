import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getMany = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});

export const add = mutation({
  args: {
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new Error("Not authenticated");
    }

    const userId = await ctx.db.insert("users", {
      name: args.name,
    });
    return userId;
  },
});
