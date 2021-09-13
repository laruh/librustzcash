initSidebarItems({"fn":[["block_height_extrema","Returns the minimum and maximum heights for blocks stored in the wallet database."],["get_address","Returns the address for the account."],["get_balance","Returns the balance for the account, including all mined unspent notes that we know about."],["get_balance_at","Returns the verified balance for the account at the specified height, This may be used to obtain a balance that ignores notes that have been received so recently that they are not yet deemed spendable."],["get_block_hash","Returns the block hash for the block at the specified height, if any."],["get_commitment_tree","Returns the commitment tree for the block at the specified height, if any."],["get_extended_full_viewing_keys","Returns the `ExtendedFullViewingKey`s for the wallet."],["get_nullifiers","Retrieve the nullifiers for notes that the wallet is tracking that have not yet been confirmed as a consequence of the spending transaction being included in a block."],["get_received_memo","Returns the memo for a received note."],["get_sent_memo","Returns the memo for a sent note."],["get_tx_height","Returns the block height at which the specified transaction was mined, if any."],["get_witnesses","Returns the incremental witnesses for the block at the specified height, if any."],["insert_block","Inserts information about a scanned block into the database."],["insert_sent_note","Inserts a sent note into the wallet database."],["insert_witness","Records the incremental witness for the specified note, as of the given block height."],["is_valid_account_extfvk","Checks whether the specified `ExtendedFullViewingKey` is valid and corresponds to the specified account."],["mark_spent","Marks a given nullifier as having been revealed in the construction of the specified transaction."],["prune_witnesses","Removes old incremental witnesses up to the given block height."],["put_received_note","Records the specified shielded output as having been received."],["put_sent_note","Records information about a note that your wallet created."],["put_tx_data","Inserts full transaction data into the database."],["put_tx_meta","Inserts information about a mined transaction that was observed to contain a note related to this wallet into the database."],["rewind_to_height","Rewinds the database to the given height."],["update_expired_notes","Marks notes that have not been mined in transactions as expired, up to the given block height."]],"mod":[["init","Functions for initializing the various databases."],["transact","Functions for creating transactions."]],"trait":[["ShieldedOutput","This trait provides a generalization over shielded output representations."]]});