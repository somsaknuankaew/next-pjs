-- DropIndex
DROP INDEX `Account_usersId_fkey` ON `account`;

-- DropIndex
DROP INDEX `Session_usersId_fkey` ON `session`;

-- CreateTable
CREATE TABLE `test` (
    `id` VARCHAR(191) NOT NULL,
    `test` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
