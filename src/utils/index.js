const mapDBToModel = ({
    id,
    title,
    body,
    tags,
    created_at,
    upadate_at,
  }) => ({
    id,
    title,
    body,
    tags,
    createdAt: created_at,
    updatedAt: upadate_at,
  });
  
  module.exports = { mapDBToModel };