import {MigrationInterface, QueryRunner} from "typeorm";

export class InitialMigration1525448428130 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, UNIQUE INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `track` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `sourceId` varchar(255) NOT NULL, `sourceType` varchar(255) NOT NULL, `metadata` text NOT NULL, UNIQUE INDEX `IDX_ae4c3aaf4fc10d6682c783f4c3` (`sourceId`, `sourceType`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `playlist` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `position` tinyint NOT NULL, `userId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `playlist_track` (`playlistId` int NOT NULL, `trackId` int NOT NULL, PRIMARY KEY (`playlistId`, `trackId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `playlist` ADD CONSTRAINT `FK_92ca9b9b5394093adb6e5f55c4b` FOREIGN KEY (`userId`) REFERENCES `user`(`id`)");
        await queryRunner.query("ALTER TABLE `playlist_track` ADD CONSTRAINT `FK_4a8364886ef4f5988bf7c3a19c8` FOREIGN KEY (`playlistId`) REFERENCES `playlist`(`id`) ON DELETE CASCADE");
        await queryRunner.query("ALTER TABLE `playlist_track` ADD CONSTRAINT `FK_dd416fc96a9a3d3384f9f508b30` FOREIGN KEY (`trackId`) REFERENCES `track`(`id`) ON DELETE CASCADE");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("ALTER TABLE `playlist_track` DROP FOREIGN KEY `FK_dd416fc96a9a3d3384f9f508b30`");
        await queryRunner.query("ALTER TABLE `playlist_track` DROP FOREIGN KEY `FK_4a8364886ef4f5988bf7c3a19c8`");
        await queryRunner.query("ALTER TABLE `playlist` DROP FOREIGN KEY `FK_92ca9b9b5394093adb6e5f55c4b`");
        await queryRunner.query("DROP TABLE `playlist_track`");
        await queryRunner.query("DROP TABLE `playlist`");
        await queryRunner.query("DROP INDEX `IDX_ae4c3aaf4fc10d6682c783f4c3` ON `track`");
        await queryRunner.query("DROP TABLE `track`");
        await queryRunner.query("DROP INDEX `IDX_e12875dfb3b1d92d7d7c5377e2` ON `user`");
        await queryRunner.query("DROP TABLE `user`");
    }

}
