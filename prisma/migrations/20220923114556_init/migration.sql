-- CreateTable
CREATE TABLE "Ficha" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "Message" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);