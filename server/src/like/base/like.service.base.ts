/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Like, Post, User } from "@prisma/client";

export class LikeServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LikeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeFindManyArgs>
  ): Promise<number> {
    return this.prisma.like.count(args);
  }

  async findMany<T extends Prisma.LikeFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeFindManyArgs>
  ): Promise<Like[]> {
    return this.prisma.like.findMany(args);
  }
  async findOne<T extends Prisma.LikeFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeFindUniqueArgs>
  ): Promise<Like | null> {
    return this.prisma.like.findUnique(args);
  }
  async create<T extends Prisma.LikeCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeCreateArgs>
  ): Promise<Like> {
    return this.prisma.like.create<T>(args);
  }
  async update<T extends Prisma.LikeUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeUpdateArgs>
  ): Promise<Like> {
    return this.prisma.like.update<T>(args);
  }
  async delete<T extends Prisma.LikeDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LikeDeleteArgs>
  ): Promise<Like> {
    return this.prisma.like.delete(args);
  }

  async getPost(parentId: string): Promise<Post | null> {
    return this.prisma.like
      .findUnique({
        where: { id: parentId },
      })
      .post();
  }

  async getUser(parentId: string): Promise<User | null> {
    return this.prisma.like
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
