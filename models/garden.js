'use strict';

const sequelizePaginate = require('sequelize-paginate')

module.exports = (sequelize, DataTypes) => {
  const Garden = sequelize.define('Garden', {
    name: {
      type: DataTypes.STRING,
    },
    photoUrl: {
      type: DataTypes.STRING,
      field: 'photo_url',
    },
    shortDescription: {
      type: DataTypes.TEXT,
      field: 'short_description',
    },
    address: {
      type: DataTypes.STRING,
    },
    crossStreet: {
      type: DataTypes.STRING,
      field: 'cross_street',
    },
    city: {
      type: DataTypes.STRING,
    },
    zipCode: {
      type: DataTypes.STRING,
      field: 'zip_code',
    },
    neighborhood: {
      type: DataTypes.STRING,
    },
    managedBy: {
      type: DataTypes.STRING,
      field: 'managed_by',
    },
    openHours: {
      type: DataTypes.TEXT,
      field: 'open_hours',
    },
    contactEmail: {
      type: DataTypes.STRING,
      field: 'contact_email',
    },
    contactPhone: {
      type: DataTypes.STRING,
      field: 'contact_phone',
    },
    contactLink: {
      type: DataTypes.STRING,
      field: 'contact_link',
    }
  }, {
    tableName: 'gardens',
    underscored: true
  });
  Garden.associate = function(models) {
    // associations can be defined here
  };
  sequelizePaginate.paginate(Garden)
  return Garden;
};
