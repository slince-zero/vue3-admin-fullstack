## 注意 npx prisma db push 和 npx prisma migrate dev --name init 这两个命令的区别

* npx prisma db push 和 npx prisma migrate dev 这两个命令都是 Prisma 提供的，用于将你在 schema.prisma 文件中的模型定义同步到数据库中。但是，这两个命令工作的方式和目标不同。


* npx prisma db push 主要用于开发环境，它会直接将模型变更推送到数据库而不会创建迁移历史。这种方式快速并且方便，但是缺少了版本控制，不适用于生产环境或是多人联合开发的场景。


* 相反，npx prisma migrate dev 会为每次的模型变更创建一个新的迁移文件，记录下如何进行数据库的变更。迁移文件允许你版本化数据库的结构，并且跟踪它们的历史变更。它尤其适用于生产环境和团队协作，因为它们提供了一种一致和可控的方式，用于更新和回滚数据库的结构。
总的来说，npx prisma migrate dev 提供了对数据库结构的版本控制，而 npx prisma db push 则没有。因此，它们应该根据开发环境和需求来恰当选择使用。


**prisma migrate dev** 命令会多生成一些文件，它会在现有的 prisma 目录下创建：

    $ tree prisma
    prisma
    ├── migrations
    │   └── 20240117083245_init
    │       └── migration.sql
    |   └── migration_lock.toml
    └── schema.prisma